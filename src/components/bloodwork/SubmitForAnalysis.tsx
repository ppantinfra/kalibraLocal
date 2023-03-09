import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useBloodworkStyles } from './BloodworkStyles';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import { uploadUserFile } from '../../api/S3Storage';
import SuccessDialog from '../common/confirmation/SuccessDialog';
import { DefaulPrimarytColor } from '../../core';
import { MUIButton } from '../common';
// import UploadIcon2 from '../../assets/images/bloodwork/upload-icon2.svg';
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.js';

type IProps = {
  clientId: string;
  submitForAnalysisButtonHandler: any;
  handleBackClick: any;
  closePopup: any;
};

const SubmitForAnalysis = ({ clientId, closePopup }: IProps) => {
  const classes = useBloodworkStyles();
  const [selectedImage] = useState<any>([]);
  const [fileData, setFileData] = React.useState();
  const [fileParseDone, setFileParse] = React.useState(false);
  const [numPages, setNumPages] = useState(0);
  const [isSubmitted, setIsSubmmitted] = React.useState(false);
  const [selectedPageNumber, setSelectedPageNumber] = useState(1);

  const fileToString = React.useCallback(async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }, []);

  const getFileData = React.useCallback(
    async (fileDetails) => {
      try {
        const res = await fileToString(fileDetails);
        setFileData(res as any);
        setFileParse(true);
      } catch (err) {
        console.error(err);
        setFileParse(false);
      }
    },
    [fileToString]
  );

  const clickSubmitAnalysisButton = (): void => {
    // const nativeEvent = event.nativeEvent.target as HTMLInputElement;

    if (global.reportSelected !== null) {
      const reader = new FileReader();
      reader.readAsDataURL(global.reportSelected);
      reader.onload = async () => {
        const response = await uploadUserFile(clientId, global.reportSelected.name, reader.result);
        if (response && response.status >= 200 && response.status <= 399) {
          //submitForAnalysisButtonHandler();
          setIsSubmmitted(true);
        } else {
          // show error here
        }
      };
    }
  };

  // const handleFileUpload = (event: any): void => {
  //   if (event.target?.files.length > 0) {
  //     global.reportSelected = event.target?.files[0];
  //     setFileData(undefined);
  //     setFileParse(false);
  //     setTimeout(() => {
  //       getFileData(global.reportSelected);
  //     }, 400);

  //   }
  // };

  React.useEffect(() => {
    getFileData(global.reportSelected);
  }, [getFileData]);

  const isImage = String(global.reportSelected.type).indexOf('image') >= 0;

  return (
    <Box className={classes.pageContent}>
      {/* <Link className={`${classes.backtoLink}`} onClick={() => handleBackClick()}>
        <ChevronLeftIcon className={classes.chevronLeftIcon} />
      </Link> */}

      <Box className={classes.submit_for_analysis} sx={{ boxShadow: 2 }}>
        {global.reportSelected ? (
          isImage === true ? (
            <Box className={`${classes.selectedPreviewImageBox} ${classes.selectedLeftImage}`}>
              <img src={URL.createObjectURL(global.reportSelected)} alt="Thumb" />
            </Box>
          ) : (
            <Box className={`${classes.selectedPreviewImageBox} ${classes.selectedLeftImage}`}>
              {fileParseDone === true && numPages > 0 && (
                <Document
                  file={fileData}
                  className={classes.document}
                  onLoadError={(err) => console.error('onload err', err)}
                  options={{}}
                  loading={''}
                  onLoadSuccess={() => {
                  }}
                >
                  <Page
                    loading={''}
                    key={selectedPageNumber}
                    pageNumber={selectedPageNumber}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                </Document>
              )}
            </Box>
          )
        ) : null}
        <Box className={classes.selectedPreviewImageBox}>
          {selectedImage?.map((item: any, index: number) => {
            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  height: 475,
                  border: 1,
                  margin: 2,
                  borderColor: '#C5CEE0'
                }}
                className={classes.selectedPreviewImage}
              >
                <img src={URL.createObjectURL(item)} alt="Thumb" />
              </Box>
            );
          })}
          <Box className={classes.submitAnalysisBtnBox}>
            {/* <Box className={`${classes.uploadAgainBtn}`}>
              <input
                type="file"
                id="file"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                multiple
                accept="application/pdf"
              />

              <label htmlFor="file" style={{ cursor: 'pointer' }}>
                <Box style={{ color: '#46D7CB', fontSize: '14px', fontWeight: '500' }}><img width={14} height={14} src={`${UploadIcon2}?fit=crop`} alt={''} />{' '}Upload More</Box>
              </label>

            </Box> */}
            <Box sx={{ alignSelf: 'flex-end' }}>
              <MUIButton
                buttonColor={'#fff'}
                buttonBackground={DefaulPrimarytColor.primary500green}
                onclickHandler={() => clickSubmitAnalysisButton()}
                buttonText={'Submit for Analysis'}
              />
            </Box>
          </Box>

          <Box className={classes.anylysisImageListBox}>
            <Stack direction="row" flexWrap={'wrap'}>
              {isImage === true ? (
                <Box
                  key={1}
                  marginTop={1}
                  sx={{
                    display: 'flex',
                    // height: 75,
                    width: 50,
                    border: 1,
                    margin: 1,
                    borderColor: '#C5CEE0'
                  }}
                >
                  <img src={URL.createObjectURL(global.reportSelected)} alt="Thumb" />
                </Box>
              ) : (
                fileParseDone === true && (
                  <Document
                    file={fileData}
                    className={classes.previewDocument}
                    loading={''}
                    onLoadError={(err) => console.error('onload err', err)}
                    onLoadSuccess={(result) => {
                      setTimeout(() => {
                        setNumPages(result.numPages);
                      }, 150);

                    }}
                  >
                    {Array.from(new Array(numPages), (el, index) => (
                      <Button onClick={() => setSelectedPageNumber(index + 1)} >
                        <Page
                          key={index}
                          loading={''}
                          pageNumber={index + 1}
                          renderAnnotationLayer={false}
                          renderTextLayer={false}
                          height={75}
                          width={50}
                          className={selectedPageNumber === index + 1 ? classes.selectedPage : undefined}

                        />
                      </Button>
                    ))}
                  </Document>
                )
              )}
            </Stack>
          </Box>


          {isSubmitted === true && (
            <SuccessDialog
              showSuccessPopup={false}
              setShowSuccessPopup={setIsSubmmitted}
              successMessage={'Bloodwork upload successful'}
              successDescription="Bloodwork successfully uploaded. It will take a few minutes to analyse the document, we'll notify you when it's ready for review"
              successNotifyMessage=""
              successDialogCloseHandler={closePopup}
              showDoneButton={true}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SubmitForAnalysis;

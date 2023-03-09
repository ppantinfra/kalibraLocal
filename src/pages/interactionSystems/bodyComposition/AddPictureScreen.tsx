import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import AddPictureForm from '../../../components/bodycomp/AddPictureForm';
import { useBodyCompositionScreenStyles } from './BodyCompositionScreenStyles';
import { HookFormButton } from '../../../components/common';
import { CommonContext, CommonContextType } from '../../../core/context';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';
import ClientSearch from '../../../components/client-search/ClientSearch';

const AddPictureScreen = () => {
    const classes = useBodyCompositionScreenStyles();
    const { userId } = useContext(CommonContext) as CommonContextType;

    const {
        // register,
        handleSubmit
        // formState: { errors },
    } = useForm({
        mode: 'onChange'
    });

    const fileTypes = ['JPG', 'PNG', 'JPEG'];
    const [frontImagePreviewUrl, setFrontImagePreviewUrl] = useState<any>();
    const [sideImagePreviewUrl, setSideImagePreviewUrl] = useState<any>();
    const [backImagePreviewUrl, setBackImagePreviewUrl] = useState<any>();

    // const [frontFile, setFrontFile] = useState(null);
    // const [sideFile, setSideFile] = useState(null);
    // const [backFile, setBackFile] = useState(null);
    const [frontFileName, setFrontFileName] = useState<any>('');
    const [sideFileName, setSideFileName] = useState<any>('');
    const [backFileName, setBackFileName] = useState<any>('');
    // const [frontFileSize, setFrontFileSize] = useState<any>();
    // const [sideFileSize, setSideFileSize] = useState<any>();
    // const [backFileSize, setBackFileSize] = useState<any>();

    const handleChangeFrontImage = (frontFile: any) => (e: any) => {
        alert('small file');
        alert(e.target);

        const reader = new FileReader();
        const {
            name,
            size
            // type, lastModifiedDate
        } = frontFile;
        if (size > 1 * 1024 * 1024) {
            alert('large file');
        } else {
            alert('small file');
        }

        reader.onloadend = () => {
            // setFrontFile(frontFile);
            // const readerTest = reader.result;
            setFrontImagePreviewUrl(reader.result);
            // console.log('frontFile', frontFile.length, frontFile, readerTest);
        };

        reader.readAsDataURL(frontFile);

        // console.log(name);
        // console.log(size, size / 1024 / 1024);
        if (size > 1 * 1024 * 1024) {
            alert('large file');
        } else {
            alert('small file');
        }
        // console.log(type);
        // console.log(lastModifiedDate);

        setFrontFileName(name);
        // setFrontFileSize(size);
    };

    const handleChangeSideImage = (sideFile: any) => {
        const reader = new FileReader();
        // setSideFile(sideFile);
        reader.onloadend = () => {
            // setSideFile(sideFile);
            setSideImagePreviewUrl(reader.result);
            // const readerTest = reader.result;
            // console.log('sideFile', sideFile, readerTest);
        };

        reader.readAsDataURL(sideFile);
        const { name } = sideFile;
        setSideFileName(name);
        // setSideFileSize(size);
    };

    const handleChangeBackImage = (backFile: any) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            // (file: any) => {
            // setBackFile(backFile);
            setBackImagePreviewUrl(reader.result);
            // const readerTest = reader.result;
            // console.log('backFile', file, readerTest);
        };

        reader.readAsDataURL(backFile);
        const { name } = backFile;
        setBackFileName(name);
        // setBackFileSize(size);
    };

    const savePictures = () => {
        // console.log(data);
    };

    // const goBack = () => {
    //   navigate(-1);
    // };

    return (

        <React.Fragment>
            <ClientSearch selectedUserId={userId} />
            <Back componentTitle={screenTitle.AddPicturePage} />
            <Box className={classes.bodyComp_measurements}>
                <form className={classes.formContent} method="post">
                    {/* <Box className={classes.bc_contents}> */}
                    <Box className={classes.bcm_headerContent}>
                        <Typography className={classes.bcmhb_subHeading}>
                            Add your client’s latest images here. Ensure adequate lighting and clear images. File formats allowed: jpg,
                            jpeg, png. Maximum file size: 1 Mb.
                        </Typography>
                    </Box>
                    <AddPictureForm
                        handleChangeFrontImage={(frontFile: any) => handleChangeFrontImage(frontFile)}
                        handleChangeBackImage={(backFile: any) => handleChangeBackImage(backFile)}
                        handleChangeSideImage={(sideFile: any) => handleChangeSideImage(sideFile)}
                        // frontFile={frontFile}
                        // backFile={backFile}
                        // sideFile={sideFile}
                        fileTypes={fileTypes}
                        frontImagePreviewUrl={frontImagePreviewUrl}
                        sideImagePreviewUrl={sideImagePreviewUrl}
                        backImagePreviewUrl={backImagePreviewUrl}
                        frontFileName={frontFileName}
                        sideFileName={sideFileName}
                        backFileName={backFileName}
                    // frontFileSize={frontFileSize}
                    // sideFileSize={sideFileSize}
                    // backFileSize={backFileSize}
                    />
                    {/* </Box> */}
                    <Box className={classes.buttonBox}>
                        <HookFormButton
                            className={classes.saveMeasurementsBtn}
                            variant="contained"
                            name="Save images"
                            handleSubmit={handleSubmit(() => savePictures())}
                        />
                    </Box>
                </form>
            </Box>
        </React.Fragment>

    );
};

export default AddPictureScreen;
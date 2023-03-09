import React, { useContext } from 'react';
// import { useBodyCompositionScreenStyles } from '../../pages/interactionSystems/bodyComposition/BodyCompositionScreenStyles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import DateFormatterHelper from '../../../core/helper/DateFormatterHelper';
// import { DatePicker } from "@mui/x-date-pickers";
// import frontBodyImg1 from "../../../assets/images/bodyComp/frontBodyImg1.svg";
// import frontBodyImg2 from "../../../assets/images/bodyComp/frontBodyImg2.svg";
// import sideBodyImg1 from "../../../assets/images/bodyComp/sideBodyImg1.svg";
// import sideBodyImg2 from "../../../assets/images/bodyComp/sideBodyImg2.svg";
// import backBodyImg1 from "../../../assets/images/bodyComp/backBodyImg1.svg";
// import backBodyImg2 from "../../../assets/images/bodyComp/backBodyImg2.svg";
// import { MUISelectField } from '../common';

import backBody1 from '../../../assets/images/bodyComp/backBody.jpg';
import frontBody1 from '../../../assets/images/bodyComp/FrontBody.jpg';
import sideBody1 from '../../../assets/images/bodyComp/SideBody.jpg';
import { useBodyCompositionScreenStyles } from './BodyCompositionScreenStyles';
import { MUISelectField } from '../../../components/common';
// import backBody2 from '../../assets/images/bodyComp/backBody.jpg';
// import frontBody2 from '../../assets/images/bodyComp/FrontBody.jpg';
// import sideBody2 from '../../assets/images/bodyComp/SideBody.jpg';
import { CommonContext, CommonContextType } from '../../../core/context';
import Back from '../../../components/common/Back';
import { screenTitle } from '../../../core/constants';
import ClientSearch from '../../../components/client-search/ClientSearch';
import Body3D from '../../../components/bodycomp/Body3D';


const ComparePictureScreen = () => {
    const classes = useBodyCompositionScreenStyles();
    const { userId } = useContext(CommonContext) as CommonContextType;

    const {
        register,
        // handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    // const [selectedDateId, setSelectedDateId] = useState<any>(1);

    const previusOptions = [
        { name: '10-Feb-23', value: '1' },
        { name: '11-Feb-23', value: '2' },
        { name: '12-Feb-23', value: '3' },
    ];

    return (
        <React.Fragment>
            <ClientSearch selectedUserId={userId} />
            <Back componentTitle={screenTitle.ComparePicturePage} />

            <Box className={classes.bodyComp_measurements}>
                {/* <Box className={classes.bc_contents}> */}

                {/* Preview Compare Pictures */}

                <Box className={classes.comparePicture}>
                    <Box className={classes.cp_content}>
                        <Box className={`${classes.cpc_imagesBox} cpc_leftImageBox`}>
                            <Box className={`${classes.cpcib_dateBox} cpc_left_dateBox`}>
                                <Box className={classes.cpcibdb_subBox}>
                                    <Typography className={classes.cpclipdb_dateText}>
                                        CURRENT
                                    </Typography>
                                </Box>
                                <Box className={`${classes.cpcibdb_subBox}`}>
                                    <Typography className={classes.cpclipdb_dateValue}>
                                        {DateFormatterHelper.formatDate(new Date())}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box className={classes.cpcib_pictureBox}>
                                <Box className={classes.cpcibpb_headerBox}>
                                    <Typography className={classes.cpcibpb_heading}>
                                        Front
                                    </Typography>
                                </Box>

                                <Box className={classes.cpcibpb_previewImageBox}>
                                    <img src={frontBody1} alt="frontBodyImg1" />
                                </Box>
                            </Box>
                            <Box className={classes.cpcib_pictureBox}>
                                <Box className={classes.cpcibpb_headerBox}>
                                    <Typography className={classes.cpcibpb_heading}>
                                        Side
                                    </Typography>
                                </Box>

                                <Box className={classes.cpcibpb_previewImageBox}>
                                    <img src={sideBody1} alt="frontBodyImg1" />
                                </Box>
                            </Box>
                            <Box className={classes.cpcib_pictureBox}>
                                <Box className={classes.cpcibpb_headerBox}>
                                    <Typography className={classes.cpcibpb_heading}>
                                        Back
                                    </Typography>
                                </Box>

                                <Box className={classes.cpcibpb_previewImageBox}>
                                    <img src={backBody1} alt="frontBodyImg1" />
                                </Box>
                            </Box>
                            <Box className={classes.cpcib_pictureBox}>
                                <Box className={classes.cpcibpb_headerBox}>
                                    <Typography className={classes.cpcibpb_heading}>
                                        3D Body
                                    </Typography>
                                </Box>

                                <Box className={classes.cpcibpb_previewImageBox}>
                                    <Body3D />
                                </Box>
                            </Box>
                        </Box>
                        <Box className={`${classes.cpc_imagesBox} cpc_rightImageBox`}>
                            <Box className={classes.cpcib_dateBox}>
                                <Box className={classes.cpcibdb_subBox}>
                                    <Typography className={classes.cpclipdb_dateText}>
                                        PREVIOUS
                                    </Typography>
                                </Box>

                                <Box id="fieledBox" className={`${classes.cpcibdb_subBox}`}>
                                    <MUISelectField
                                        labelId="previusDate-simple-select-label"
                                        id="previusDate-simple-select"
                                        controlName="previusDate"
                                        errors={errors}
                                        register={register}
                                        labelName="Previus Date"
                                        // defaultValue={selectedDateId}
                                        placeholder="Select"
                                        options={previusOptions}
                                        optionValue="value"
                                        optionName="name"
                                        selectClases={classes.selectControl}
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.cpcib_pictureBox}>
                                <Box className={classes.cpcibpb_headerBox}>
                                    <Typography className={classes.cpcibpb_heading}>
                                        Front
                                    </Typography>
                                </Box>

                                <Box className={classes.cpcibpb_previewImageBox}>
                                    <img src={frontBody1} alt="frontBodyImg1" />
                                </Box>
                            </Box>
                            <Box className={classes.cpcib_pictureBox}>
                                <Box className={classes.cpcibpb_headerBox}>
                                    <Typography className={classes.cpcibpb_heading}>
                                        Side
                                    </Typography>
                                </Box>

                                <Box className={classes.cpcibpb_previewImageBox}>
                                    <img src={sideBody1} alt="frontBodyImg1" />
                                </Box>
                            </Box>
                            <Box className={classes.cpcib_pictureBox}>
                                <Box className={classes.cpcibpb_headerBox}>
                                    <Typography className={classes.cpcibpb_heading}>
                                        Back
                                    </Typography>
                                </Box>

                                <Box className={classes.cpcibpb_previewImageBox}>
                                    <img src={backBody1} alt="frontBodyImg1" />
                                </Box>
                            </Box>
                            <Box className={classes.cpcib_pictureBox}>
                                <Box className={classes.cpcibpb_headerBox}>
                                    <Typography className={classes.cpcibpb_heading}>
                                        3D Body
                                    </Typography>
                                </Box>

                                <Box className={classes.cpcibpb_previewImageBox}>
                                    <Body3D />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* </Box> */}
            </Box>
        </React.Fragment>
    );
};

export default ComparePictureScreen;
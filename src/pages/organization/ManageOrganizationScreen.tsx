import React, { useEffect, useState, useContext } from 'react';
import { useManageOrganizationScreenStyles } from './ManageOrganizationScreenStyles';
import Box from '@mui/material/Box';
import Back from '../../components/common/Back';
import Link from '@mui/material/Link';
import { RoutesPath as route } from '../../core/constants';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../core';
import ManageOrganizationList from '../../components/organization/ManageOrganizationList';
import DrawerActionSidebar from '../../components/layouts/drawer/DrawerActionSidebar';
import { ActionDrawerEnum } from '../../core/enums';
import EditRole from '../../components/organization/EditRole';
import ClientList from '../../components/organization/ClientList';
import { CommonContext, CommonContextType } from '../../core/context';

const ManageOrganizationScreen = () => {
    const classes = useManageOrganizationScreenStyles();
    const navigate = useNavigate();
    const [manageOrganizationList, setManageOrganizationList] = useState<any[]>([]);
    const [filterManageOrganizationList, setFilterManageOrganizationList] = useState<any[]>([]);
    const [openEditDrawer, setOpenEditDrawer] = React.useState<boolean>(false);
    const [drawerData, setDrawerData] = React.useState<any>('');
    const [updateUserId, setUpdateUserId] = React.useState<any>('');
    const [userName, setUserName] = React.useState<any>('');
    const [openClientListDrawer, setOpenClientListDrawer] = React.useState<boolean>(false);
    const { tenantKey } = useContext(CommonContext) as CommonContextType;

    const getManageorganizationList = async () => {
        setManageOrganizationList([]);
        setFilterManageOrganizationList([]);
        await UserService.getManageOrganizationList().then((res) => {
            if (res) {
                setManageOrganizationList(res);
                setFilterManageOrganizationList(res);
            }
        });
    };

    function dynamicSort(property, type) {
        return function (a, b) {
            let result;
            const firstValue = a[property];
            const secValue = b[property];
            if (type === 'asc') {
                result = firstValue < secValue ? -1 : firstValue > secValue ? 1 : 0;
            } else {
                result = firstValue > secValue ? -1 : firstValue < secValue ? 1 : 0;
            }
            return result;
        };
    }

    const sort = (property: string, type: string) => {
        const users = manageOrganizationList.sort(dynamicSort(property, type));
        setFilterManageOrganizationList(() => {
            return [...users];
        });
    };


    const toggleRightDrawer =
        (openFlag: boolean, type: string, drawerDataToShow?: any, userIdToUpdate?: string, userNameToShow?: string) => {
            setDrawerData(drawerDataToShow);
            setUpdateUserId(userIdToUpdate);
            setUserName(userNameToShow);
            if (type === ActionDrawerEnum.EditOrganizationRole) {
                setOpenEditDrawer(openFlag);
            } else if (type === ActionDrawerEnum.OrganizationClientList) {
                setOpenClientListDrawer(openFlag);
            }
        };


    useEffect(() => {
        getManageorganizationList();
    }, [tenantKey]);

    const gotoAddPractioner = () => {
        navigate(`/${route.ADDPRACTIONER}`);
    };

    return (
        <React.Fragment>
            {/* Edit Roles Drawer*/}
            <DrawerActionSidebar
                open={openEditDrawer}
                toggleDrawer={toggleRightDrawer}
                component={<EditRole selectedRoles={drawerData} toggleDrawer={toggleRightDrawer} updateUserId={updateUserId} refreshListHandler={getManageorganizationList} userName={userName} />}
                drawerType={ActionDrawerEnum.EditOrganizationRole}
                anchor="right"
                width={380}
            />

            {/* Client List Drawer*/}
            <DrawerActionSidebar
                open={openClientListDrawer}
                toggleDrawer={toggleRightDrawer}
                component={<ClientList clients={drawerData} userName={userName} />}
                drawerType={ActionDrawerEnum.OrganizationClientList}
                anchor="right"
                width={380}
            />





            <Box className={classes.page_Content}>
                <Box className={classes.mc_headingSection}>
                    <Back componentTitle={'Manage Organization'} disableBackButton={true} />
                    <Link className={classes.addNewClientLink} onClick={gotoAddPractioner} sx={{ cursor: 'pointer' }}>
                        {/* <AddIcon sx={{ fontWeight: '600' }} /> */}
                        Add Practitioner
                    </Link>
                </Box>


                <ManageOrganizationList userList={filterManageOrganizationList} sortHandler={sort} toggleRightDrawer={toggleRightDrawer} />
            </Box >
        </React.Fragment>
    );
};

export default ManageOrganizationScreen;
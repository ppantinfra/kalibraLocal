
import React from 'react';
import { CardView } from '../partials';
import { useAddClientStyles } from '../AddClientStyles';
import { HookFormButton, InputField } from '../../common';
import { useForm } from 'react-hook-form';
import * as pattern from '../../../core';
import Box from '@mui/material/Box';

type Iprops = {
    searchClientHandler: any;
};


const SearchClient = ({ searchClientHandler }: Iprops) => {
    const classes = useAddClientStyles();
    const {
        register,
        handleSubmit,
        formState: { errors }
        // control
    } = useForm({
        mode: 'onChange'
    });
    return (
        <CardView
            caption="Search by Email Address"
            description="Check if your client is already on Kalibra. Be sure to enter the email address they used to sign up."
            confirmButtonLabel="Search"
            // confirmButtonHandler={searchClientHandler}
            height={318}
            width={348}
        >
            <div className={classes.formContent} >
                <Box mb={4}>
                    <InputField
                        labelName="Email"
                        placeholder="Enter Client’s Email Address"
                        type="email"
                        controlName={'email'}
                        register={register}
                        errors={errors}
                        rules={{ required: true, pattern: pattern.EmailPattern }}
                    />
                </Box>
                <Box className={classes.buttonBox}>
                    <HookFormButton className={classes.submitBtn} variant="contained" name="Search"
                        handleSubmit={handleSubmit((data: any) => searchClientHandler(data))}
                    />
                </Box>
            </div>
        </CardView>
    );
};

export default SearchClient;
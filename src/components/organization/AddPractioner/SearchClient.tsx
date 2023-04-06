import React from 'react';
import { CardView } from '../../clients/partials';
import { HookFormButton, InputField } from '../../common';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import * as pattern from '../../../core';
import { useAddPractionerStyles } from './AddPractionerStyles';


const SearchClient = ({ searchHandler }) => {
    const classes = useAddPractionerStyles();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        shouldFocusError: false

    });
    return (
        <React.Fragment>
            <CardView
                caption="Search by Email Address"
                description="Check if the practitioner is already on Kalibra. Be sure to enter the email address they used to sign up."
                confirmButtonLabel="Search"
                // confirmButtonHandler={searchClientHandler}
                height={318}
                width={348}
            >
                <div className={classes.formContent} >
                    <Box mb={4}>
                        <InputField
                            labelName="Email"
                            placeholder="Enter Practitioner’s Email Address"
                            type="email"
                            controlName={'email'}
                            register={register}
                            errors={errors}
                            rules={{ required: true, pattern: pattern.EmailPattern, maxLength: 255 }}
                        />
                    </Box>
                    <Box className={classes.buttonBox}>
                        <HookFormButton className={classes.submitBtn} variant="contained" name="Search"
                            handleSubmit={handleSubmit((data: any) => searchHandler(data))}
                        />
                    </Box>
                </div>
            </CardView>
        </React.Fragment>
    );
};

export default SearchClient;
import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import { TransitionProps } from '@mui/material/transitions';
import { useActivityTemplateModalStyle } from './ActivityTemplateModalStyle';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

type Props = {
  openTemplateModal: boolean;
  hideTemplateModal: () => void;
  setOpenTemplateModal: any;
  templateDropdownData: any;
  templateModalHeader: any;
  templateSelectLabel: any;
  templateButtonLabel: any;
};

const ActivityTemplateModal = ({
  openTemplateModal,
  hideTemplateModal,
  setOpenTemplateModal,
  templateDropdownData,
  templateModalHeader,
  templateSelectLabel,
  templateButtonLabel,
}: Props) => {
  const classes = useActivityTemplateModalStyle();
  const [selectedId, setSelectedId] = React.useState<any>(0);

  const handleChange = (event: any) => {
    setSelectedId(event.target.value);
  };

  const handleSave = () => {
    setOpenTemplateModal(false);
  };

  return (
    <Dialog
      open={openTemplateModal}
      TransitionComponent={Transition}
      maxWidth={'md'}
      onClose={hideTemplateModal}
      aria-describedby="alert-dialog-slide-description"
      className={`${classes.act_template_diolog} act_template_diologh `}
    >
      <DialogContent>
        <Box className={classes.dialogContentBox}>
          <Box className={classes.tempModalHeading}>
            <Typography>{templateModalHeader}</Typography>
          </Box>

          <Box className={classes.fromGroup} id="fieledBox">
            <InputLabel htmlFor="select-label" className={classes.inputLabel}>
              {templateSelectLabel}
            </InputLabel>

            <NativeSelect
              // id={`day`}
              sx={{ background: 'rgba(228, 233, 242, 0.4)' }}
              inputProps={{
                name: 'day',
                id: 'uncontrolled-native',
              }}
              onChange={handleChange}
              fullWidth
              value={selectedId}
              className="form-control nativeSelect"
              classes={{
                root: classes.selectControl,
                // icon: classes.arrowDownIcon,
              }}
            >
              {templateDropdownData?.map((data: any, i: any) => (
                <option value={data.id} key={i}>
                  {data.day}
                </option>
              ))}
            </NativeSelect>
          </Box>

          <Box className={classes.buttonBox}>
            <Button className={classes.saveBtn} onClick={handleSave}>
              {templateButtonLabel}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityTemplateModal;

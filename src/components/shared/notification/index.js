import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { NOTIFICATION_SEVERITY } from './constants';

const Notification = ({ className, content, severity, title }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (severity) {
      setOpen(true);
    }
  }, [severity]);

  const handleOnClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      className={className.snackbar}
      open={open}
      transitionDuration={{ exit: 0 }}
    >
      <Alert
        className={className.alert}
        icon={false}
        onClose={handleOnClose}
        severity={severity || NOTIFICATION_SEVERITY.error}
        variant='filled'
      >
        <AlertTitle>{title}</AlertTitle>
        {content}
      </Alert>
    </Snackbar>
  );
};

Notification.propTypes = {
  className: PropTypes.shape({
    alert: PropTypes.string,
    snackbar: PropTypes.string,
  }),
  content: PropTypes.string,
  severity: PropTypes.string,
  title: PropTypes.string, 
};

Notification.defaultProps = {
  className: {
    alert: '',
    snackbar: '',
  },
  content: '',
  severity: '',
  title: '',
};

export default Notification;

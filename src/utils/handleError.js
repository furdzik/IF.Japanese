import { isCancel } from 'axios';
import * as Sentry from '@sentry/browser';

import messages from '@utils/default.messages';
import { sentryEnv } from '@config/environment';

import { showNotification } from '@containers/Notification/Notification.reducer';

const logError = (error, info) => {
  Sentry.withScope((scope) => {
    if (info) {
      scope.setExtras(info);
    }
    Sentry.captureException(error);
  });
};

export default (error, info, message = messages.defaultErrorText, noHide = false) => (dispatch) => {
  const isApiError = !!(
    error
    && error.response
    && (error.response.status || error.response.status === 0)
  );

  if (sentryEnv.enabled && !isApiError) {
    logError(error, info);
  }

  if (!isCancel(error)) {
    dispatch(showNotification(message, noHide));
  }
};

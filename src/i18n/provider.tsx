import React from 'react';
import { IntlProvider } from 'react-intl';
import { useAppSelector } from '../Redux/hooks';
import messages from './messages';

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const language = useAppSelector((state) => state.i18n);

  return (
    <IntlProvider
      locale={language}
      messages={messages[language]}
    >
      {children}
    </IntlProvider>
  );
};

export default I18nProvider;

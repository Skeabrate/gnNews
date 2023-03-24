import { FormattedMessage } from 'react-intl';
import { TTranslateValues } from './messages';

const translate = (id: keyof TTranslateValues) => <FormattedMessage id={id} />;

export default translate;

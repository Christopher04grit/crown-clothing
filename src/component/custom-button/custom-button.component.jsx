import React from 'react';

import { CustomButtonCointainer, } from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
  <CustomButtonCointainer {...props}>
    {children}
  </CustomButtonCointainer>
);

export default CustomButton;
import React from 'react';
import { Form, Label, Select } from 'semantic-ui-react';
import { DateTimePicker } from 'react-widgets';

const DateInput: React.FC<any> = ({
  input,
  width,
  options,
  placeholder,
  date = false,
  time = false,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DateTimePicker 
        placeholder={placeholder}
        value = {input.value || null}
        onChange = {input.onChange}
        onBlur={input.onBlur}
        onKeyDown={(e) => e.preventDefault()}
        date={date}
        time={time}
        {...rest}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
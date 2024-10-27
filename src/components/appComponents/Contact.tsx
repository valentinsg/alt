import React from 'react';
import { Button, Fieldset, Input, Stack, } from '@chakra-ui/react';
import { Field } from "../ui/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "../ui/native-select"

const Contact: React.FC = () => {
  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Fieldset.HelperText>
          Please provide your contact details below.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field label="Name">
          <Input name="name" />
        </Field>

        <Field label="Email address">
          <Input name="email" type="email" />
        </Field>

        <Field label="Country">
          <NativeSelectRoot>
            <NativeSelectField
              name="country"
              items={[
                "United Kingdom (UK)",
                "Canada (CA)",
                "United States (US)",
              ]}
            />
          </NativeSelectRoot>
        </Field>
      </Fieldset.Content>

      <Button type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
  )
}
export default Contact;
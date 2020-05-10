import React from "react";
import { render,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

//Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    getByText(/checkout form/i);
  });
  

   test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId, findByTestId } = render(<CheckoutForm />);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address/i);
    const city = getByLabelText(/city/i);
    const state = getByLabelText(/state/i);
    const zip = getByLabelText(/zip/i);
    const button = getByTestId(/checkout/i)
    const successMessage = findByTestId(/successmessage/i)
  
    fireEvent.change(firstName, { target: { value: 'Ben' } });
    fireEvent.change(lastName, { target: { value: 'Simpson' } });
    fireEvent.change(address, { target: { value: 'country' } });
    fireEvent.change(city, { target: { value: 'USA' } });
    fireEvent.change(state, { target: { value: 'AMerca' } });
    fireEvent.change(zip, { target: { value: '12345' } });
  
    //expect(firstName.value).toBe('Ben');
    expect(lastName.value).toBe('Simpson');
    expect(address.value).toBe('country');
    expect(city.value).toBe('USA');
    expect(state.value).toBe('AMerca');
    expect(zip.value).toBe('12345');
  
    fireEvent.click(button);
  
    expect(successMessage).toBeTruthy
  });

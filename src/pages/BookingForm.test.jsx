import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  it("should render the form and handle form submission", () => {
    render(<BookingForm />);

    // Find form elements
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByText(/confirm reservation/i);

    // Fill in form fields
    fireEvent.change(firstNameInput, { target: { value: "Joe" } });
    fireEvent.change(lastNameInput, { target: { value: "Rogan" } });
    fireEvent.change(emailInput, { target: { value: "joe@rogan.com" } });
    fireEvent.change(dateInput, { target: { value: "2024-09-05" } });
    fireEvent.change(timeSelect, { target: { value: "9:59" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    // Inpit
    expect(firstNameInput.value).toBe("Joe");
    expect(lastNameInput.value).toBe("Rogan");
    expect(emailInput.value).toBe("joe@rogan.com");
    expect(dateInput.value).toBe("2024-09-05");
    expect(timeSelect.value).toBe("9:59");
    expect(guestsInput.value).toBe("3");
    expect(occasionSelect.value).toBe("birthday");

    // Submit
    fireEvent.click(submitButton);
  });
});

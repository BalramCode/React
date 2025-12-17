// React Hook Form is a popular library in React used to handle forms easily. It uses React hooks to manage form inputs, validation, and submission with less code and better performance.

// Import the useForm hook from react-hook-form
import { useForm } from "react-hook-form";

// Import CSS styles
import './App.css';

function App() {
  // Destructure useForm to get functions and values:
  // - register: connects inputs to the form
  // - handleSubmit: handles form submission
  // - errors: contains validation errors
  // - isSubmitting: shows if the form is being submitted
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // This function is called when the form is submitted successfully
  async function onSubmit(data) {
    // Simulate a 5-second delay (e.g., sending data to server)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Print the submitted data to the console
    console.log("Submitting the form:", data);
  }

  return (
    // Attach handleSubmit to form's onSubmit.
    // It will validate the form before calling onSubmit.
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* First Name Field */}
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        // If there's an error on firstName, add "input-error" class
        className={errors.firstName ? "input-error" : ""}
        type="text"
        // Register the field with validation rules:
        // - required: true, with a custom message
        // - minLength: 4 characters, with a message
        {...register("firstName", {
          required: { value: true, message: "First name is required" },
          minLength: { value: 4, message: "Min length is 4 characters" },
        })}
      />
      {/* Show error message if validation fails for first name */}
      {errors.firstName && (
        <p className="m-error">{errors.firstName.message}</p>
      )}

      <br />

      {/* Middle Name Field (optional, no validation) */}
      <label htmlFor="middleName">Middle Name:</label>
      <input id="middleName" type="text" {...register("middleName")} />
      <br />

      {/* Last Name Field (optional, no validation) */}
      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" type="text" {...register("lastName")} />
      <br />

      {/* Submit Button */}
      <input
        type="submit"
        // Disable button while form is submitting
        disabled={isSubmitting}
        // Change button text based on submission status
        value={isSubmitting ? "Submitting..." : "Submit"}
      />
    </form>
  );
}

// Export the App component so it can be used in index.js
export default App;

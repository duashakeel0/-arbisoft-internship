import { render, screen, fireEvent } from "@testing-library/react";
import MarkAttendance from "../pages/MarkAttendance";

describe("MarkAttendance", () => {
  test("shows validation errors when submitting an empty form", async () => {
    render(<MarkAttendance />);

    fireEvent.click(
      screen.getByRole("button", { name: /mark attendance/i })
    );

    expect(
      await screen.findByText("Student Name is required")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Student ID is required")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Date is required")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Please select a status")
    ).toBeInTheDocument();
  });
});
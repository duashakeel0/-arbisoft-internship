import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "./MarkAttendance.css";

type AttendanceForm = {
  studentName: string;
  studentId: string;
  date: string;
  status: string;
};

function MarkAttendance() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AttendanceForm>();

  const onSubmit = (data: AttendanceForm) => {
    console.log(data);
    toast.success("Attendance marked successfully!");
  };

  return (
    <div className="form-card">
      <h1>Mark Attendance</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Student Name</label>

          <input
            {...register("studentName", {
              required: "Student Name is required",
            })}
          />

          {errors.studentName && (
            <p className="error">{errors.studentName.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Student ID</label>

          <input
            {...register("studentId", {
              required: "Student ID is required",
            })}
          />

          {errors.studentId && (
            <p className="error">{errors.studentId.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Date</label>

          <input
            type="date"
            {...register("date", {
              required: "Date is required",
            })}
          />

          {errors.date && (
            <p className="error">{errors.date.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Status</label>

          <select
            {...register("status", {
              required: "Please select a status",
            })}
          >
            <option value="">Select Status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Late">Late</option>
          </select>

          {errors.status && (
            <p className="error">{errors.status.message}</p>
          )}
        </div>

        <button className="submit-btn" type="submit">
          Mark Attendance
        </button>
      </form>
    </div>
  );
}

export default MarkAttendance;
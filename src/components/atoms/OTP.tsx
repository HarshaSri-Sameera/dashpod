import TextField from "@material-ui/core/TextField";

const OtpScreen = () => {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        name="otp"
        label="Enter OTP"
        type="number"
        id="otp"
        autoComplete="off"
      />
    </>
  );
};

export default OtpScreen;

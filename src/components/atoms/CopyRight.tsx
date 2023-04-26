import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function CopyRight(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" target="_blank" href="https://dashpod.in/">
        Dashpod
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default CopyRight;

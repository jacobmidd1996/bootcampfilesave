type AlertProps = {
  alertType: string;
  message: string;
  children: string;
};

function Alert2(props: AlertProps) {
  return (
    <div className={`alert alert-${props.alertType || 'success'}`} role="alert">
      {props.message} {props.children}
    </div>
  );
}

export default Alert2;

interface AlertProps {
  alertType: string;
  message: string;
}

function Alert(props: AlertProps) {
  return (
    <div className={`alert alert-${props.alertType || 'success'}`} role="alert">
   {/* This won't work because you can't embed a JSX expression within a prop string (BUT WHY???!?!?!?)
   <div className="alert alert-{props.alertType || 'success'}" role="alert">
   */}
      {props.message}
    </div>
  );
}

export default Alert;

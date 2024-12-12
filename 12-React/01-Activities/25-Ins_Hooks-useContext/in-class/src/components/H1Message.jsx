export default function H1Message(props) {
  console.log("H1Message rendering at " + Date());

  return <h1>-=# {props.children} #=-</h1>
}
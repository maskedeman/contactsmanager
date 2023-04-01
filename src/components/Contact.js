const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {props.data.name}
        <br />
        {props.data.number}
        <br />
        {props.data.location}
      </div>
    </>
  );
};

export default Contact;

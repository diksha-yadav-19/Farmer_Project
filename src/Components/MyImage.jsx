export default function MyImage() {
    const path1 =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EqzPGWNkq5Yt74H071eJD286WnDMKjE2hGFHR5n8yanWaPQpNm9gv9UKi8EKxxlQTYQ&usqp=CAU";
  
    const imageStyle = {
      width: 300,
      borderTopLeftRadius: '10px',  
      borderTopRightRadius: '10px', 
    };
  
    return <img src={path1} style={imageStyle} alt="" />;
  }
  
function Larva() {
  const body1Style = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    top: '100px',
    left: '100px',
    backgroundColor: 'red',
  };

  const body1EyeWhite = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    top: '10px',
    left: '10px',
    backgroundColor: 'white',
    position: 'relative',
  };
  const body1EyeBlack = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'black',
  };
  const body2 = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'absolute',
    top: '20px',
    left: '40px',
    backgroundColor: 'orange',
  };
  const body3 = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'absolute',
    top: '40px',
    left: '70px',
    backgroundColor: 'yellow',
  };
  const body4 = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'absolute',
    top: '38px',
    left: '100px',
    backgroundColor: 'green',
  };
  const body5 = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'absolute',
    top: '35px',
    left: '130px',
    backgroundColor: 'blue',
  };
  const body6 = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'absolute',
    top: '35px',
    left: '130px',
    backgroundColor: 'violet',
  };
  return (
    <div>
      <div class="body body1" style={body1Style}>
        <div class="eye-white" style={body1EyeWhite}>
          <div class="eye-black" style={body1EyeBlack}></div>
        </div>
      </div>
      <div class="body body2" style={body2}></div>
      <div class="body body3" style={body3}></div>
      <div class="body body4" style={body4}></div>
      <div class="body body5" style={body5}></div>
      <div class="body body6" style={body6}></div>
    </div>
  );
}

export default Larva;

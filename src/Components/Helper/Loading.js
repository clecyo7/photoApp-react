import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 3) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function displayStep(i) {
    return {
      display: step === i ? 'block' : 'none',
    };
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000"
          preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">

            <g style={displayStep(0)}>
              <path d="M20 261 c-12 -23 -14 -74 -2 -69 4 2 24 12 44 23 48 24 57 15 25 -27
              -36 -47 -77 -128 -77 -150 0 -16 6 -19 32 -16 29 3 33 7 39 43 4 22 21 73 39
              113 29 70 32 105 7 83 -8 -6 -21 -5 -37 4 -35 20 -58 18 -70 -4z"
              />
            </g>
            <g style={displayStep(1)}>
            <path d="M156 159 c-14 -66 -16 -99 -7 -99 5 0 12 6 14 13 4 10 6 10 6 0 1 -7
              6 -13 11 -13 7 0 8 19 4 53 -7 59 -21 81 -28 46z m11 -51 c-3 -7 -5 -2 -5 12
              0 14 2 19 5 13 2 -7 2 -19 0 -25z"
            />
            <path d="M201 118 c1 -35 4 -52 6 -38 3 14 11 29 19 33 17 10 18 39 2 55 -22
              22 -28 12 -27 -50z m22 17 c-7 -21 -13 -19 -13 6 0 11 4 18 10 14 5 -3 7 -12
              3 -20z"
            />
            <path d="M251 118 c1 -35 4 -53 6 -41 2 12 11 27 19 33 17 15 18 42 2 58 -22
              22 -28 12 -27 -50z m22 17 c-7 -21 -13 -19 -13 6 0 11 4 18 10 14 5 -3 7 -12
              3 -20z"
            />
             </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;

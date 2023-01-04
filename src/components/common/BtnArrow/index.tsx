import React from 'react';
import './index.scss';

type BtnArrowProps = {
  styles: string;
  handler: () => void;
};

const BtnArrow = ({ styles, handler }: BtnArrowProps) => {
  return (
    <button className={styles} type="button" onClick={handler}>
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M9.12505 19.1L0.700048 10.7C0.600048 10.6 0.529382 10.4917 0.488049 10.375C0.446049 10.2584 0.425049 10.1334 0.425049 10C0.425049 9.86669 0.446049 9.74169 0.488049 9.62502C0.529382 9.50836 0.600048 9.40002 0.700048 9.30002L9.12505 0.875024C9.35838 0.641691 9.65005 0.525024 10 0.525024C10.35 0.525024 10.65 0.650024 10.9 0.900024C11.15 1.15002 11.275 1.44169 11.275 1.77502C11.275 2.10836 11.15 2.40002 10.9 2.65002L3.55005 10L10.9 17.35C11.1334 17.5834 11.25 17.8707 11.25 18.212C11.25 18.554 11.125 18.85 10.875 19.1C10.625 19.35 10.3334 19.475 10 19.475C9.66672 19.475 9.37505 19.35 9.12505 19.1Z" />
      </svg>
    </button>
  );
};

export default BtnArrow;

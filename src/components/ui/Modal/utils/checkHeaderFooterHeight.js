export const checkHeaderFooterHeight = (modalHeaderRef, modalFooterRef, setHeaderFooterHeight) => {
  if (modalHeaderRef.current || modalFooterRef.current) {
    const modalHeaderHeight = modalHeaderRef.current ? modalHeaderRef.current.clientHeight : 0;
    const modalFooterHeight = modalFooterRef.current ? modalFooterRef.current.clientHeight : 0;
    setHeaderFooterHeight(
      modalHeaderHeight + modalFooterHeight
    );
  } else {
    setHeaderFooterHeight(0);
  }
};

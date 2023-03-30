import { vitest } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ModalTemplate from '../components/Modals/Template';

describe('Modal', () => {
  it('Should close modal when user clicks on close svg button', () => {
    const handleClose = vitest.fn();

    const { getByText } = render(
      <ModalTemplate toggleModal={handleClose}>
        <div>Modal test message</div>
      </ModalTemplate>
    );

    expect(getByText('Modal test message')).toBeTruthy();
    fireEvent.click(screen.getByLabelText('close modal svg'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Should close modal when user clicks on blured background', () => {
    const handleClose = vitest.fn();

    render(
      <ModalTemplate toggleModal={handleClose}>
        <div>Modal test message</div>
      </ModalTemplate>
    );

    fireEvent.click(screen.getByLabelText('close modal'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});

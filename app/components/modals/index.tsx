'use client';

import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { IoMdClose } from 'react-icons/io';
import { GrGooglePlus } from 'react-icons/gr';
import Button from '@components/Button';

interface ModalProps {
  isOpen?: boolean;
  //   onClose: () => void;
  //   onSubmit: () => void;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionlabel?: string;
}

export default function Modal({
  isOpen,
  onClose = () => {}, // 지울 예정
  onSubmit = () => {}, // 지울 예정
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionlabel,
}: ModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none">
        <div className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
          {/* Content */}
          <div
            className={classNames(
              'translate h-full duration-300',
              showModal
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            )}
          >
            <div className="translate relative flex h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto">
              {/* Modal Header */}
              <div className="relative flex items-center justify-center rounded-t border-b-[1px] p-6">
                <button
                  className="absolute left-9 border-0 p-1 transition hover:opacity-70"
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* Modal Body */}
              <div className="relative flex-auto p-6">{body}</div>
              {/* Modal Footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex w-full flex-row items-center gap-4">
                  {secondaryAction && secondaryActionlabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionlabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    icon={GrGooglePlus}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

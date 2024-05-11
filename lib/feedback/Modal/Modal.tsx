import { Portal, PortalProps } from "@mui/base/Portal";
import { Waves } from "@components";
import { If } from "../../utils";
import "./Modal.scss";

type TModal = {
  showCloseButton?: boolean;
  bodyMaxHeight?: string;
  onClose: () => void;
  showWaves?: boolean;
  zIndex?: number;
  children: any;
  open: boolean;
  title: string;
  top?: number;
} & PortalProps;
export const Modal = (props: TModal) => {
  const {
    showCloseButton = true,
    bodyMaxHeight = "",
    showWaves = true,
    zIndex = 10,
    children,
    onClose,
    title,
    open,
    top,
    ...rest
  } = props;

  const trueMaxHeight =
    typeof bodyMaxHeight === "string"
      ? bodyMaxHeight
      : `${bodyMaxHeight * 0.1}rem`;
  return (
    <Portal {...rest}>
      <If condition={open}>
        <div
          className='shrood-modal-0elj'
          style={{ top: `${top}vh`, zIndex: zIndex + 1 }}
        >
          <div
            className='shrood-modal-0elj__content p-6'
            style={{
              maxHeight: trueMaxHeight,
              zIndex: zIndex + 1,
              top: `${top}vh`,
            }}
          >
            <If condition={showCloseButton}>
              <button
                className='shrood-modal-0elj__close icon icon-close color-alpha bg-nu'
                onClick={onClose}
              />
            </If>
            <h4 className='mb-2 text-center mb-6 px-4'>{title}</h4>
            <div className='shrood-modal-0elj-content__content'>{children}</div>
            <If condition={showWaves}>
              <Waves className='shrood-modal-0elj__waves' />
            </If>
          </div>
          <div
            className='shrood-modal-0elj__backdrop'
            onClick={onClose}
            style={{ zIndex }}
          ></div>
        </div>
      </If>
    </Portal>
  );
};

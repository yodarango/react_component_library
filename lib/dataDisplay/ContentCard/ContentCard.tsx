import { Button, Dropdown, If, IfElse, Menu, MenuButton, MenuItem } from "@ds";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import { AuthComponent } from "@utilities";
import { logoWhite } from "@images";

import "./ContentCard.scss";

type TContentCard = {
  options?: [TMenuOptions, TMenuOptions, TMenuOptions];
  onClick?: () => void;
  description?: string;
  className?: string;
  title?: string;
  image: string;
  meta?: string;
};

type TMenuOptions = {
  options?: TMenuOptionsOption[];
  metaText?: string;
  onClick?: () => void;
  isLoading?: boolean;
  icon: string;
  id?: string;
};

type TMenuOptionsOption = {
  value: string | number | boolean;
  onClick: (value: any) => void;
  isNeedAuth?: boolean;
  metaText?: string;
  userId?: number;
  label: string;
  icon?: string;
  id: string;
};

export const ContentCard = (props: TContentCard) => {
  const { className, image, title, meta, options, onClick, description } =
    props;

  const imageBackground = {
    height: description ? 110 : 60,
    width: description ? 110 : 60,
  };

  const imageClass = !!image ? "opacity-50" : "";
  return (
    <>
      <div
        className={`${className} content-card-93hx d-flex align-items-start justify-content-start p-3 gap-4`}
        style={{ height: description ? `13.7rem` : `8.7rem` }}
      >
        <div className='content-card-93h__clickable' onClick={onClick}></div>
        <div className='content-card-93hx__image' onClick={onClick}>
          <div className='content-card-93hx__image-bkg' style={imageBackground}>
            <Thumbnail
              className={`content-card-93hx__image-img flex-shrink-0 ${imageClass}`}
              alt={title || "thumbnail for a content card"}
              src={image || logoWhite}
              height={"100%"}
              width={"100%"}
            />
          </div>
        </div>

        <div className='content-card-93hx__info d-flex align-items-start justify-content-between flex-column w-100'>
          <div className='d-flex align-items-center justify-content-start gap-2 w-100'>
            <div className='w-100'>
              <h4 className={description ? "mb-2" : ""}>{title}</h4>
              {description && (
                <div
                  className='content-card-93hx__description w-100'
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>
            {meta && (
              <div className='content-card-93hx__meta-tag bg-gamma px-2'>
                {meta}
              </div>
            )}
          </div>

          <If condition={!!(options && options?.length > 0)}>
            <div className='content-card-info-93hx__actions d-flex align-items-start justify-content-start flex-shrink-0 gap-3'>
              <div
                className='content-card-93h__clickable-actions'
                onClick={onClick}
              ></div>
              {options?.map((option) => (
                <IfElse
                  condition={!(option?.options && option.options.length > 0)}
                  key={option.id}
                >
                  <Button
                    onClick={option.onClick}
                    disabled={option.isLoading}
                    className={`p-0 ${
                      option.isLoading ? "loading animation-spin" : ""
                    }`}
                  >
                    <span className='d-inline-flex align-items-center justify-content-start flex-shrink-0 gap-1'>
                      <span>{option.metaText || ""}</span>{" "}
                      <span
                        className={`icon icon-${option.icon} color-alpha`}
                      />
                    </span>
                  </Button>
                  <Dropdown>
                    <MenuButton
                      className={`bg-nu p-0 m-0 ${
                        option.isLoading ? "disabled" : ""
                      }`}
                      disabled={option.isLoading}
                    >
                      <span className='d-inline-flex align-items-center justify-content-start flex-shrink-0 gap-1'>
                        <span>{option.metaText || ""}</span>{" "}
                        <span
                          className={`icon icon-${
                            option.isLoading ? "loading" : option.icon
                          } ${
                            option.isLoading ? "loading animation-spin" : ""
                          } color-alpha`}
                        />
                      </span>
                    </MenuButton>
                    <Menu>
                      {option.options &&
                        option.options.map((item) => (
                          <AuthComponent
                            userId={Number(item.userId)}
                            skip={!item.isNeedAuth}
                            key={item.id}
                          >
                            <MenuItem
                              key={item.id}
                              onClick={() => item.onClick(item.value)}
                            >
                              <div className='d-flex align-items-center justify-content-start gap-3'>
                                <span
                                  className={`icon icon-${item.icon} color-alpha`}
                                />
                                <p>{item.label}</p>
                              </div>
                            </MenuItem>
                          </AuthComponent>
                        ))}
                    </Menu>
                  </Dropdown>
                </IfElse>
              ))}
            </div>
          </If>
        </div>
      </div>
    </>
  );
};

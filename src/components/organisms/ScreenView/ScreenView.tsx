import React, { Fragment, PropsWithChildren } from "react";
import { FocusAwareStatusBar, FocusAwareStatusBarProps } from "../../atoms";

export interface ScreenViewProps extends PropsWithChildren {
  StatusBarProps?: FocusAwareStatusBarProps;
}

export const ScreenView: React.FC<ScreenViewProps> = ({
  StatusBarProps,
  children,
}) => {
  return (
    <Fragment>
      <FocusAwareStatusBar {...StatusBarProps} />
      {children}
    </Fragment>
  );
};

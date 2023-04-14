/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewImgOverridesProps = {
    ReviewImg?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type ReviewImgProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ReviewImgOverridesProps | undefined | null;
}>;
export default function ReviewImg(props: ReviewImgProps): React.ReactElement;
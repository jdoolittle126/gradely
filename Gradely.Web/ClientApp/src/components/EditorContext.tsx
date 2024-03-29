import * as React from 'react';
import {Editor} from "@craftjs/core";
import {TextIngredient} from "./template-editor/ingredients/TextIngredient/TextIngredient";
import {ContainerIngredient} from "./template-editor/ingredients/ContainerIngredient/ContainerIngredient";
import {EntryIngredient} from "./template-editor/ingredients/EntryIngredient/EntryIngredient";
import {BaseContainerIngredient} from "./template-editor/ingredients/ContainerIngredient/BaseContainerIngredient";
import {IngredientWrapper} from "./template-editor/ingredients/helpers/IngredientWrapper";
import {FlexIngredient} from "./template-editor/ingredients/FlexIngredient/FlexIngredient";
import {ImageIngredient} from "./template-editor/ingredients/ImageIngredient/ImageIngredient";
import {DividerIngredient} from "./template-editor/ingredients/DividerIngredient";

export const EditorContext = (props: any) => {
    return (
        <Editor
            resolver={{TextIngredient, ContainerIngredient, EntryIngredient, BaseContainerIngredient, FlexIngredient, ImageIngredient, DividerIngredient}}
            enabled={props?.enabled}
            onRender={IngredientWrapper}>
                {props.children}
        </Editor>
    );
}

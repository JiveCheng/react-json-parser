import React, { Component, createElement } from 'react';
import { isValidElementType } from 'react-is';

// Delete me
export const Thing = () => {
    return <div>the snozzberries taste like snozzberries</div>;
};

export interface SchemaInterface {
    component: string;
    _id?: string;
    [props: string]: any;
    children?: ParseSchemaParamType | null;
}

export type ParseSchemaParamType = SchemaInterface[] | SchemaInterface;

interface ComponentMapInterface {
    [name: string]: React.ComponentType;
}

interface MainInterface {
    readonly schema: ParseSchemaParamType;
    readonly componentMap: ComponentMapInterface;
}

export class ReactComponentSchema extends Component<MainInterface> {
    schema: ParseSchemaParamType;
    componentMap: ComponentMapInterface;
    componentMapCollection: any;
    constructor(props: MainInterface) {
        super(props);
        this.schema = props.schema;
        this.componentMap = props.componentMap;
        this.componentMapCollection = new WeakMap();
        this.setComponentMap(this.componentMap);
    }

    private parseSchema(schemas: ParseSchemaParamType | null = null) {
        let elements: any = schemas;
        if (Array.isArray(schemas) && schemas.length > 0) {
            elements = this.parseSubSchemas(schemas);
        } else if (
            typeof schemas === 'object' &&
            Object.prototype.hasOwnProperty.call(schemas, 'component')
        ) {
            elements = this.createComponent(schemas as SchemaInterface);
        }
        return elements;
    }

    private parseSubSchemas(schemas: SchemaInterface[]) {
        let keyMapArray: string[] = Object.keys(schemas);
        Array.prototype.forEach.call(keyMapArray, (keys: any, index) => {
            const schema: SchemaInterface = schemas[keys];
            schema.key = typeof schema._id === 'string' ? schema._id : index;
            schemas[keys] = this.parseSchema(schemas[keys]);
        });
        return schemas;
    }

    private createComponent(schema: SchemaInterface) {
        const { component, children, text, ...rest } = schema;
        const ParsedComponent = this.resolveComponent(schema);
        const Children =
            typeof text !== 'undefined'
                ? text
                : this.resolveComponentChildren(schema);
        return createElement(ParsedComponent, rest, Children);
    }

    private resolveComponent(schema: SchemaInterface) {
        const componentMap = this.getComponentMap();
        let Component = null;
        if (
            Object.prototype.hasOwnProperty.call(schema, 'component') &&
            schema.component.length > 0
        ) {
            if (schema.component === Object(schema.component)) {
                Component = schema.component;
            } else if (componentMap && componentMap[schema.component]) {
                Component = componentMap[schema.component];
            } else if (isValidElementType(schema.component)) {
                Component = schema.component;
            }
        } else {
            throw new Error(`ReactJsonSchema could not resolve a component due to a missing component 
              attribute in the schema.`);
        }
        return Component;
    }

    private resolveComponentChildren(schema: SchemaInterface) {
        return Object.prototype.hasOwnProperty.call(schema, 'children')
            ? this.parseSchema(schema.children)
            : undefined;
    }

    private getComponentMap() {
        return this.componentMapCollection.get(this);
    }

    private setComponentMap(componentMap: ComponentMapInterface) {
        this.componentMapCollection.set(this, componentMap);
    }

    render() {
        return this.parseSchema(this.schema);
    }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsList extends Schema.Component {
  collectionName: 'components_components_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'primitives.item', true>;
  };
}

export interface ComponentsText extends Schema.Component {
  collectionName: 'components_components_texts';
  info: {
    displayName: 'Text';
    icon: 'layer';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface PrimitivesItem extends Schema.Component {
  collectionName: 'components_primitives_items';
  info: {
    displayName: 'Item';
    icon: 'grid';
  };
  attributes: {
    content: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.list': ComponentsList;
      'components.text': ComponentsText;
      'primitives.item': PrimitivesItem;
    }
  }
}

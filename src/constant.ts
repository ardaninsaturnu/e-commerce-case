import React from "react";

export let inputValues: ({ name: string; errorMessage: string; type: string; validation: { required: string } } | { name: string; type: string; validation: { required: string } } | { name: string; type: string; validation: { required: string } } | { name: string; type: string; validation: { required: string } } | { name: string; type: string; validation: { required: string } } | { name: string; type: string; validation: { required: string } })[];
inputValues = [
  {
    name: 'Name',
    type: 'text',
    validation: {
      required: 'Input cant be empty'
    }
  },
  {
    name: 'Price',
    type: 'number',
    validation: {
      required: 'Input cant be empty'
    }
  },
  {
    name: 'Category',
    type: 'text',
    validation: {
      required: 'Input cant be empty'
    }
  },
  {
    name: 'Description',
    type: 'text',
    validation: {
      required: 'Input cant be empty'
    }
  },
  {
    name: 'Avatar',
    type: 'text',
    validation: {
      required: 'Input cant be empty'
    }
  },
  {
    name: 'DeveloperEmail',
    type: 'email',
    validation: {
      required: 'Input cant be empty'
    }
  }
];
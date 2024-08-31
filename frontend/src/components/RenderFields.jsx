import React from 'react'
import FormField from './FormField';
import FormButton from './FormButton';

const RenderFields = (fields) => (
    fields.map(({ label, name, type, isRequired }) => (
      <div key={name} className="flex flex-col">
        <label className="font-semibold">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
        <FormField
          name={name}
          type={type}
          value={formData[name] || ''}
          onChange={handleInputChange}
          isRequired={isRequired}
        />
      </div>
    ))
  );

  export default RenderFields
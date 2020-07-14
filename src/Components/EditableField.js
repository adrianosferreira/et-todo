import React from 'react';

function EditableField(props) {
	const {isEditing, value, changeField, allowInlineEditing, id} = props;

	const endEditing = (e) => {
		if (e.key !== 'Enter') {
			return;
		}

		changeField(id, 'isEditing', false);
	};

	return <React.Fragment>
		{isEditing && allowInlineEditing ? <input style={{width: 'auto'}} onChange={(e) => changeField(id, 'name', e.target.value)} onKeyDown={(e) => endEditing(e)} type="text" value={value}/> :
			<span onClick={() => changeField(id, 'isEditing', true)}>{value}</span>}
	</React.Fragment>
}

export default EditableField;
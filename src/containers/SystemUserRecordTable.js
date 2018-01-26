import { connect } from 'react-redux';
import UserRecordTable from './../components/UserRecordTable';
import { openEditUserDialog, closeEditUserDialog, openAddUserDialog, 
        closeAddUserDialog, updateUsernameField, updateTimeoutField, 
        updatePasswordField, updateConfirmPasswordField, enableEditMode 
    } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        userInDialog: state.userDialogs.userInDialog,
        addDialogState: state.userDialogs.addUser.open,
        editDialogState: state.userDialogs.editUser
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUserClick: () => { dispatch(openAddUserDialog()) },
        onUserRecordClick: (user) => { dispatch(openEditUserDialog(user)) },
        onAddDialogClose: () => { dispatch(closeAddUserDialog()) },
        onEditDialogClose: () => { dispatch(closeEditUserDialog()) },
        onEditButtonClick: () => { dispatch(enableEditMode()) },
        onUsernameFieldChange: (username, allUsers) => { dispatch(updateUsernameField(username, allUsers)) },
        onTimeoutFieldChange: (timeout) => { dispatch(updateTimeoutField(timeout)) },
        onPasswordFieldChange: (password) => { dispatch(updatePasswordField(password)) },
        onConfirmPasswordFieldChange: (confirmPassword) => { dispatch(updateConfirmPasswordField(confirmPassword)) }
    };
}

const SystemUserRecordTable = connect(
    mapStateToProps, mapDispatchToProps
)(UserRecordTable);

export default SystemUserRecordTable;
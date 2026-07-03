use super::*;

pub(super) fn environment_selection_error(err: MidnightCoderErr) -> JSONRPCErrorError {
    match err {
        MidnightCoderErr::InvalidRequest(message) => invalid_request(message),
        err => internal_error(format!("failed to validate environment selections: {err}")),
    }
}

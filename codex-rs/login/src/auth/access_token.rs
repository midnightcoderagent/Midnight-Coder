const PERSONAL_ACCESS_TOKEN_PREFIX: &str = "at-";

pub(super) enum MidnightCoderAccessToken<'a> {
    PersonalAccessToken(&'a str),
    AgentIdentityJwt(&'a str),
}

pub(super) fn classify_codex_access_token(access_token: &str) -> MidnightCoderAccessToken<'_> {
    if access_token.starts_with(PERSONAL_ACCESS_TOKEN_PREFIX) {
        MidnightCoderAccessToken::PersonalAccessToken(access_token)
    } else {
        MidnightCoderAccessToken::AgentIdentityJwt(access_token)
    }
}

#[cfg(test)]
#[path = "access_token_tests.rs"]
mod tests;

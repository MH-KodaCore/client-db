pub const LIST_OF_DB: &str = r#"
    SELECT datname FROM pg_database WHERE datname NOT IN ('template0', 'template1')
"#;

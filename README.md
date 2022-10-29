# Active Travel Intervention Platform

A very early prototype, without explanation. Go play with <https://acteng.github.io/atip>.

## Dependencies

Install dependencies as follows, on Linux:

```bash
# Install Rust:
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install wasm-pack
cargo install wasm-pack
```

## Development

Vanilla JS right now, no tooling. Just run the following command:

```bash
serve_locally.sh
```

That may take some time to run the first time as Rust crates are compiled.
Eventually, after lots of other messages, you should get the following:

```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

and open your browser at the URL provided to see the results of local development work.


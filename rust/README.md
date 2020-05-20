curl https://sh.rustup.rs -sSf | sh
rustup update
rustup self uninstall
rustup show

rustc --version
cargo --version

rustc main.rs
./main

to fix linker issue: sudo xcode-select --reset


References:
* https://matthewjberger.xyz/rust/Getting-Started-With-Rust/
* https://github.com/rust-unofficial/awesome-rust#database-1
* https://doc.rust-lang.org/rust-by-example/index.html
* https://limpet.net/mbrubeck/2019/02/07/rust-a-unique-perspective.html

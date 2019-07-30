workspace(name = "bazel_example")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")


http_archive(
    name = "io_bazel_rules_closure",
    sha256 = "e86a126f10ec42a7127322af6264a31d76b4222fae8d1be26e5471409ef5bc41",
    strip_prefix = "rules_closure-89e5f407fd25bad7493e2b43ab8d1c1c1969dca4",
    urls = [
        "https://github.com/bloombox/rules_closure/archive/89e5f407fd25bad7493e2b43ab8d1c1c1969dca4.tar.gz",
    ],
)

http_archive(
    name = "build_bazel_rules_proto",
    sha256 = "b851e971f5b8ab82e19ac0ac6a80605a50c476400253b751b7828b3b03134589",
    strip_prefix = "rules_proto-c5e0081628a2cbaf6855152ffa6a1984c2ff10a5",
    urls = [
    "https://github.com/bloombox/rules_proto/archive/c5e0081628a2cbaf6855152ffa6a1984c2ff10a5.tar.gz",
    ],
)

load("@io_bazel_rules_closure//closure:defs.bzl", "closure_repositories")

closure_repositories()

git_repository(
    name = "bazel_javascript",
    remote = "https://github.com/zenclabs/bazel-javascript.git",
    tag = "0.0.28",
)

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "7c4a690268be97c96f04d505224ec4cb1ae53c2c2b68be495c9bd2634296a5cd",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.34.0/rules_nodejs-0.34.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories(
    package_json = [],
)

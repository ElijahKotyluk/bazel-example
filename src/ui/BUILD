package(default_visibility = ["//visibility:public"])

load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar")
load("@io_bazel_rules_sass//:defs.bzl",
     "sass_library",
     "sass_binary")

load("@io_bazel_rules_closure//closure:defs.bzl",
     "closure_js_library",
     "closure_js_template_library")


closure_js_library(
    name = "renderer-js",
    srcs = ["renderer.js"],
    deps = [])

closure_js_template_library(
    name = "ui-demo-tpl",
    srcs = ["templates/ui-demo.soy"])

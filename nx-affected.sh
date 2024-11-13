#!/bin/bash

# Ensure the script exits on the first error encountered
set -e

# Fetch the latest changes from the origin/develop branch
git fetch origin develop

# Set the base and head commits
BASE_COMMIT=$(git rev-parse origin/develop)
HEAD_COMMIT=$(git rev-parse HEAD)

# Print the base and head commits
echo "Base commit: $BASE_COMMIT"
echo "Head commit: $HEAD_COMMIT"

# Determine the changed files
CHANGED_FILES=$(git diff --name-only $BASE_COMMIT $HEAD_COMMIT)
echo "Changed files: $CHANGED_FILES"

# Check if there are any changed files
if [ -z "$CHANGED_FILES" ]; then
  echo "No changes detected."
  exit 0
fi

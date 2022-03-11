describe("Sha256 test", function() {
    it("hash of empty string equal e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", function() {
      assert.equal(sha256(""), "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
    });
  
    it("hash of abc equal ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad", function() {
      assert.equal(sha256("abc"), "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
    });
  
    it("hash of The quick brown fox jumps over the lazy dog equal d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592", function() {
      assert.equal(
        sha256("The quick brown fox jumps over the lazy dog"),
        "d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592"
      );
    });
  
    it("hash of long text (from text.js) dog equal a0baedb5f074f4edc75acb233ac4566cf5b2f0600718709bd79b6ccfabd0d05e", function() {
      assert.equal(
        sha256(smallText),
        "a0baedb5f074f4edc75acb233ac4566cf5b2f0600718709bd79b6ccfabd0d05e"
      );
    });
  });
  
  describe("Streebog 256 test", function() {
    it("hash of empty string equal bbe19c8d2025d99f943a932a0b365a822aa36a4c479d22cc02c8973e219a533f", function() {
      assert.equal(
        streebog("", 256),
        "bbe19c8d2025d99f943a932a0b365a822aa36a4c479d22cc02c8973e219a533f"
      );
    });
  
    it("hash of abc equal b2fd82456abac138932d3e9c70b8e0f6852c2148229a33c5a4180eb98e99cf10", function() {
      assert.equal(
        streebog("abc", 256),
        "b2fd82456abac138932d3e9c70b8e0f6852c2148229a33c5a4180eb98e99cf10"
      );
    });
  
    it("hash of The quick brown fox jumps over the lazy dog equal 7884152447d8e4e40c087c21458dc8928181839e73a90df94aada774b6e5c740", function() {
      assert.equal(
        streebog("The quick brown fox jumps over the lazy dog", 256),
        "7884152447d8e4e40c087c21458dc8928181839e73a90df94aada774b6e5c740"
      );
    });
  
    it("hash of long text (from text.js) equal e1c7d3b501c811640d18e736071391de38dde982d89c0100cecdaecab0827c21", function() {
      assert.equal(
        streebog(smallText, 256),
        "e1c7d3b501c811640d18e736071391de38dde982d89c0100cecdaecab0827c21"
      );
    });
  });
  
  describe("Streebog 512 test", function() {
    it("hash of empty string equal 8a1a1c4cbf909f8ecb81cd1b5c713abad26a4cac2a5fda3ce86e352855712f36a7f0be98eb6cf51553b507b73a87e97946aebc29859255049f86aa09a25d948e", function() {
      assert.equal(
        streebog("", 512),
        "8a1a1c4cbf909f8ecb81cd1b5c713abad26a4cac2a5fda3ce86e352855712f36a7f0be98eb6cf51553b507b73a87e97946aebc29859255049f86aa09a25d948e"
      );
    });
  
    it("hash of abc equal ccf58ecafefa63f9dcd5aea122c16d0fbcbd6c5701c62c01e6e3a3e58dd31eb108643f2063428c7b914a0aaae9f1a9dd15aa8b9e507cbb84be8b16fa2da381fd", function() {
      assert.equal(
        streebog("abc", 512),
        "ccf58ecafefa63f9dcd5aea122c16d0fbcbd6c5701c62c01e6e3a3e58dd31eb108643f2063428c7b914a0aaae9f1a9dd15aa8b9e507cbb84be8b16fa2da381fd"
      );
    });
  
    it("hash of The quick brown fox jumps over the lazy dog equal 717de8cc7eda2797ecec0ce49c79c6c61b1bcb86228c0c4c8edb76e53f0e9a0c2114051130ac882bf9a833d9eea8ad6b4833f95c8d034cc26914316af884ca68", function() {
      assert.equal(
        streebog("The quick brown fox jumps over the lazy dog", 512),
        "717de8cc7eda2797ecec0ce49c79c6c61b1bcb86228c0c4c8edb76e53f0e9a0c2114051130ac882bf9a833d9eea8ad6b4833f95c8d034cc26914316af884ca68"
      );
    });
      
    it("hash of long text (from text.js) equal 1511c4d0f112bbde8d9a1e72c8d68483ee489699a1d8a6e36c8c603856dc02948a7edba066daeb858e66ead2d55416544c1d4b1f9a01fad005f5c31351e4d18d", function() {
      assert.equal(
        streebog(smallText, 512),
        "1511c4d0f112bbde8d9a1e72c8d68483ee489699a1d8a6e36c8c603856dc02948a7edba066daeb858e66ead2d55416544c1d4b1f9a01fad005f5c31351e4d18d"
      );
    });
  });
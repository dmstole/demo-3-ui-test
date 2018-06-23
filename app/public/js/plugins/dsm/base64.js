function Base64(data, contentType, sliceSize) {
    this.data = data;
    this.contentType = contentType || '';
    this.sliceSize = sliceSize || 512;
}

Base64.prototype.convertFromByte = function () {
    var byteCharacters = atob(this.data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += this.sliceSize) {
        var slice = byteCharacters.slice(offset, offset + this.sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++)
            byteNumbers[i] = slice.charCodeAt(i);

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: this.contentType });
}

Base64.prototype.convertFromB64 = function () {
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += this.sliceSize) {
        var slice = byteCharacters.slice(offset, offset + this.sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: this.contentType });
    return blob;
}
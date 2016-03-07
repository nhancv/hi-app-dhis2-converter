testApp
    .controller('HomeController', function ($rootScope,
                                            $scope,
                                            $location) {

        $(function () {
            var pstyle = 'border: 1px solid #dfdfdf; padding: 5px;';
            $('#layout').w2layout({
                name: 'layout',
                panels: [
                    {type: 'top', size: 50, style: pstyle, content: 'top'},
                    {type: 'left', size: 200, style: pstyle, content: 'left'},
                    {type: 'main', style: pstyle, content: 'main'}
                ]
            });
        });
        var config = {
            layout: {
                name: 'layout',
                padding: 4,
                panels: [
                    { type: 'top', size: 50,style:'border: 3px solid green; padding: 5px; align:right; color:green;'},
                    { type: 'left', size: '50%', resizable: true, minSize: 300 },
                    { type: 'main', minSize: 300 },
                    { type: 'bottom', size: 50,style:'border: 3px solid green; padding: 5px; align:right; color:green;' },
                ]
            },
            sidebar: {
                name: 'sidebar',
                nodes: [
                    {
                        id: 'level-1', text: 'Level 1', img: 'icon-folder', expanded: true, group: true,
                        nodes: [{id: 'level-1-1', text: 'Level 1.1', icon: 'fa-home'},
                            {id: 'level-1-2', text: 'Level 1.2', icon: 'fa-star'},
                            {id: 'level-1-3', text: 'Level 1.3', icon: 'fa-star-empty'}
                        ]
                    },
                    {
                        id: 'level-2', text: 'Level 2', img: 'icon-folder', expanded: true, group: true,
                        nodes: [{
                            id: 'level-2-1', text: 'Level 2.1', img: 'icon-folder', count: 3,
                            nodes: [
                                {id: 'level-2-1-1', text: 'Level 2.1.1', icon: 'fa-star-empty'},
                                {id: 'level-2-1-2', text: 'Level 2.1.2', icon: 'fa-star-empty'},
                                {id: 'level-2-1-3', text: 'Level 2.1.3', icon: 'fa-star-empty'}
                            ]
                        },
                            {id: 'level-2-2', text: 'Level 2.2', icon: 'fa-star-empty'},
                            {id: 'level-2-3', text: 'Level 2.3', icon: 'fa-star-empty'}
                        ]
                    }
                ]
            },

            form: {
                header: 'DHIS-NHM Integration',
                name: 'form',

                fields: [
                    { name: 'orgid', type: 'text', html: { caption: 'Organisation Unit:', attr: 'size="10" readonly' } },
                    { name: 'dataset', type: 'text', required: true, html: { caption: 'Data Set:', attr: 'size="40" maxlength="40"' } },
                    { name: 'period', type: 'text', required: true, html: { caption: 'Period:', attr: 'size="40" maxlength="40"' } }

                ],
                actions: {
                    Preview: function () {
                        var errors = this.validate();
                        if (errors.length > 0) return;
                        if (this.recid == 0) {
                            w2ui.grid.add($.extend(true, { recid: w2ui.grid.records.length + 1 }, this.record));
                            w2ui.grid.selectNone();
                            this.clear();
                        } else {
                            w2ui.grid.set(this.recid, this.record);
                            w2ui.grid.selectNone();
                            this.clear();
                        }
                    },
                    DownloadXMl: function () {
                        var errors = this.validate();
                        if (errors.length > 0) return;
                        if (this.recid == 0) {
                            w2ui.grid.add($.extend(true, { recid: w2ui.grid.records.length + 1 }, this.record));
                            w2ui.grid.selectNone();
                            this.clear();
                        } else {
                            w2ui.grid.set(this.recid, this.record);
                            w2ui.grid.selectNone();
                            this.clear();
                        }
                    },
                    PUSH: function () {
                        var errors = this.validate();
                        if (errors.length > 0) return;
                        if (this.recid == 0) {
                            w2ui.grid.add($.extend(true, { recid: w2ui.grid.records.length + 1 }, this.record));
                            w2ui.grid.selectNone();
                            this.clear();
                        } else {
                            w2ui.grid.set(this.recid, this.record);
                            w2ui.grid.selectNone();
                            this.clear();
                        }
                    }
                }
            }
        }

        $(function () {
            // initialization
            $('#main').w2layout(config.layout);
            w2ui.layout.content('left', $().w2sidebar(config.sidebar));
            w2ui.layout.content('main', $().w2form(config.form));
        });
    });

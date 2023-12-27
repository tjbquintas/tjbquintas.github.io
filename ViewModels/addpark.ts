import { Park } from "../Model/Park.js";
import { Spot } from "../Model/Spot.js";
import { UserService } from "../Services/UserService.js";
import { ParkService } from "../Services/ParkService.js";

var count : number = 0;
var park_ids : string[] = [];
$().ready(function () {
    const userService = new UserService();
    const parkService = new ParkService();
    var loggedUserId = Number(sessionStorage.getItem("logged") ?? -1);
    var loggedUser = userService.getUserById(loggedUserId);
    if (loggedUser == null || loggedUser.type != "company") {
        location.href = "/login.html";
    } else {
        $("#user").text(loggedUser.name ?? "");
        const tabs = $("ul.nav-tabs");
        const content = $(".tab-content");
        $(".add-floor").on("click", function() {
            park_ids.push(`park${++count}`);
            tabs.prepend(`<li class="nav-item">
                            <a href="#park${count}" class="nav-link" data-bs-toggle="tab" contenteditable></a>
                        </li>`);
            content.append(`<div id="park${count}" class="tab-pane fade">
                                <div class="d-flex mt-2">
                                    <div class="col form-floating me-1">
                                        <input min="1" type="number" class="form-control" name="row" id="park${count}rowInput" placeholder="Rows" value="9">
                                        <label for="park${count}rowInput">Rows</label>
                                    </div>
                                    <div class="col form-floating ms-1">
                                        <input min="1" type="number" class="form-control" name="col" id="park${count}colsInput" placeholder="Columns" value="21">
                                        <label for="park${count}colsInput">Columns</label>
                                    </div>
                                </div>
                                <div class="mt-2 justify-content-center parking-lot"></div>
                            </div>`)
            fillGrid(`park${count}`);
            $("input[name='row'], input[name='col']").on("input", function() : void {
                var id = $(this).parentsUntil($(content), ".tab-pane")[0].id;
                fillGrid(id);
            })
        })

        function fillGrid(id : string) : void {
            const rows = Number($(`#${id} input[name="row"]`).val());
            const cols = Number($(`#${id} input[name="col"]`).val());
            const pl = $(`#${id} .parking-lot`);
            pl.css("--park-rows", rows);
            pl.css("--park-cols", cols);
            pl.html("")
            for (var i = 0; i < rows*cols; ++i)
            {
                pl.append(`<div class="spot hollow"></div>`);
            }
            $(".spot").on("click", function() {
                var spot = $(this);
                spot.toggleClass("hollow");
                spot.toggleClass("filled");
                var c = 0;
                $(pl).find(".spot.filled").each(function () {
                    $(this).html(String(++c))
                })
            })
        }

        $("#add_park").on("click", function() {
            var park = new Park();
            park.name = String($("#nameInput").val());
            park.address = String($("#addressInput").val());
            park.image = String($("#imageInput").val());
            park.user_id = loggedUser?.id;
            var d : Record<string, Record<string, number>[][]> = {};
            for (var i of park_ids) {
                var floor = $(`a[href="#${i}"]`).text();
                var cols = Number($(`#${i} [name="col"]`).val());
                d[floor] = [];
                var cc = 0;
                var row : Record<string, number>[] = [];
                $(`#${i} .parking-lot .spot`).each(function () {
                    var f = {
                        id: Number($(this).text() == "" ? -1 : $(this).text()),
                        state: $(this).hasClass("hollow") ? Spot.EMPTY : Spot.FREE,
                        res_id: -1
                    }
                    row.push(f);
                    if (++cc % cols == 0) {
                        d[floor].push(row);
                        row = [];
                    }
                })
            }
            park.spots = d;
            parkService.createPark(park);
            location.href = "/index.html";
        })
    }
})